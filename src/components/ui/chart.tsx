"use client"

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import type React from "react" // Import React

export function Chart({
  data,
  type = "bar",
  xAxisKey = "name",
  yAxisKey = "total",
  className,
}: {
  data: any[]
  type?: "bar" | "line"
  xAxisKey?: string
  yAxisKey?: string
  className?: string
}) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      {type === "bar" ? (
        <BarChart data={data}>
          <XAxis dataKey={xAxisKey} stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip content={<ChartTooltip />} /> {/* Updated Tooltip */}
          <Bar dataKey={yAxisKey} fill="#adfa1d" radius={[4, 4, 0, 0]} />
        </BarChart>
      ) : (
        <LineChart data={data}>
          <XAxis dataKey={xAxisKey} stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip content={<ChartTooltip />} /> {/* Updated Tooltip */}
          <Line type="monotone" dataKey={yAxisKey} stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      )}
    </ResponsiveContainer>
  )
}

export function ChartTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
            <span className="font-bold text-muted-foreground">{payload[0].value}</span>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export function ChartContainer({
  children,
  config,
  className,
}: {
  children: React.ReactNode
  config: Record<string, { label: string; color: string }>
  className?: string
}) {
  return (
    <div className={className}>
      {children}
      <div className="mt-4 flex items-center justify-center gap-4">
        {Object.entries(config).map(([key, { label, color }]) => (
          <div key={key} className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full`} style={{ backgroundColor: color }} />
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

