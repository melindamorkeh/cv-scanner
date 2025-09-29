"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a legend"

const chartData = [
  { browser: "python", visitors: 275, fill: "var(--color-python)" },
  { browser: "cplus", visitors: 200, fill: "var(--color-cplus)" },
  { browser: "java", visitors: 187, fill: "var(--color-java)" },
  { browser: "javascript", visitors: 173, fill: "var(--color-javascript)" },
  { browser: "react", visitors: 90, fill: "var(--color-react)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  python: {
    label: "Python",
    color: "var(--chart-1)",
  },
  cplus: {
    label: "C++",
    color: "var(--chart-2)",
  },
  java: {
    label: "Java",
    color: "var(--chart-3)",
  },
  javascript: {
    label: "JavaScript",
    color: "var(--chart-4)",
  },
  react: {
    label: "React",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartPieLegend() {
  return (
    <Card className="flex flex-col h-97.5">
      <CardHeader className="items-center pb-0">
        <CardTitle>Top CV Skills</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="visitors" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
