'use client'

import { useTheme } from 'styled-components'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Eletrônicos', value: 400 },
  { name: 'Esportes', value: 300 },
  { name: 'Roupas', value: 300 },
  { name: 'Beleza', value: 200 },
]

const COLORS = ['#38BDF8', '#0EA5E9', '#14B8A6', '#F97316']

export default function PizzaGraph() {
  const theme = useTheme() // pega cores do tema atual

  return (
    <div
      className="p-6 rounded shadow-md w-full h-[210px] flex items-center flex-col justify-center transition-all duration-300"
      style={{
        backgroundColor: theme.cardBackground,
        color: theme.text,
        boxShadow: theme.shadow,
      }}
    >
      <h2 className="text-[1.3rem] font-normal mb-4 text-center w-full relative top-2">
        Vendas por Categorias
      </h2>
      <div className="w-full h-40 px-4 relative top-2">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="45%"
              cy="50%"
              outerRadius={60}
              label={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: theme.background === 'dark' ? '#1e293b' : '#ffffff',
                border: 'none',
                borderRadius: '8px',
                color: theme.background === 'dark' ? '#f8fafc' : '#1e293b',
              }}
            />
            <Legend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              wrapperStyle={{
                color: theme.text,
                fontSize: 14,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
