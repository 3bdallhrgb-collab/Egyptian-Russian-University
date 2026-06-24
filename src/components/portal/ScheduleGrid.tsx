import { useMemo } from 'react'
import { mockCourses, type Course } from '@/data/mockCourses'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const startHour = 7
const endHour = 19
const hours = Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i)
const rowHeight = 60

function parseTime(timeStr: string) {
  const [time, period] = timeStr.split(' ')
  const [hourStr, minuteStr] = time.split(':')
  let h = Number(hourStr)
  const m = Number(minuteStr)
  if (period === 'PM' && h !== 12) h += 12
  if (period === 'AM' && h === 12) h = 0
  return h + m / 60
}

function coursePosition(course: Course) {
  const start = parseTime(course.startTime)
  const end = parseTime(course.endTime)
  return {
    top: (start - startHour) * rowHeight,
    height: (end - start) * rowHeight,
  }
}

export function ScheduleGrid() {
  const currentDay = 'Wednesday'
  const currentTime = 11.5 // 11:30 AM

  const coursesByDay = useMemo(() => {
    const map: Record<string, Course[]> = {}
    days.forEach((d) => (map[d] = []))
    mockCourses.forEach((c) => {
      c.days.forEach((d) => {
        if (map[d]) map[d].push(c)
      })
    })
    return map
  }, [])

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[900px]">
        <div className="grid grid-cols-[80px_repeat(7,1fr)] grid-rows-[auto_repeat(13,60px)] border border-slate-200 bg-white rounded-lg overflow-hidden">
          {/* Header row */}
          <div className="border-b border-r border-slate-200 bg-slate-50 p-2"></div>
          {days.map((day) => (
            <div
              key={day}
              className={`border-b border-r border-slate-200 p-3 text-center text-sm font-semibold ${day === currentDay ? 'bg-eru-50 text-eru-800' : 'bg-slate-50 text-slate-700'
                }`}
            >
              {day}
            </div>
          ))}

          {/* Time labels column */}
          {hours.map((hour) => (
            <div
              key={hour}
              className="border-b border-r border-slate-200 p-2 text-xs text-slate-500 text-right -mt-2"
            >
              {hour % 12 === 0 ? 12 : hour % 12}:00 {hour >= 12 ? 'PM' : 'AM'}
            </div>
          ))}

          {/* Day columns - each spans all 13 time rows */}
          {days.map((day) => {
            const isCurrent = day === currentDay
            return (
              <div
                key={`col-${day}`}
                className={`relative border-r border-slate-200 row-span-13 ${isCurrent ? 'bg-eru-50/30' : ''
                  }`}
              >
                {/* Hour grid lines */}
                {hours.map((hour) => (
                  <div
                    key={`line-${hour}`}
                    className="absolute left-0 right-0 border-b border-slate-200 pointer-events-none"
                    style={{ top: (hour - startHour) * rowHeight }}
                  />
                ))}

                {/* Current time indicator */}
                {isCurrent && (
                  <div
                    className="absolute left-0 right-0 h-0.5 bg-eru-500 z-20 pointer-events-none"
                    style={{ top: (currentTime - startHour) * rowHeight }}
                  />
                )}

                {/* Course cards */}
                {coursesByDay[day].map((course, idx) => {
                  const pos = coursePosition(course)
                  return (
                    <div
                      key={`${day}-${course.code}-${idx}`}
                      className={`absolute left-1 right-1 rounded-md border p-2 text-xs ${course.color} shadow-sm overflow-hidden transition hover:scale-[1.02] hover:shadow-md cursor-pointer`}
                      style={{
                        top: pos.top,
                        height: pos.height,
                        zIndex: 10,
                      }}
                      title={`${course.title} — ${course.location} — ${course.instructor}`}
                    >
                      <div className="font-bold leading-tight">{course.code}</div>
                      <div className="truncate leading-tight">{course.title}</div>
                      <div className="text-[10px] mt-1 opacity-80">
                        {course.startTime} - {course.endTime}
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
