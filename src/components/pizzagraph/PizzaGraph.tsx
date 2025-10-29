'use client'

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Eletrônicos', value: 400 },
  { name: 'Esportes', value: 300 },
  { name: 'Roupas', value: 300 },
  { name: 'Beleza', value: 200 },
]

const COLORS = ['#38BDF8', '#0EA5E9', '#14B8A6', '#F97316']

export default function PizzaGraph() {
  return (
    <div className="bg-[#1e293b] text-white p-6 rounded shadow-md w-full  h-[210px] flex items-center flex-col justify-center">
      <h2 className="text-[1.3rem] font-normal mb-4 text-center w-full relative top-2">Vendas por Categorias</h2>
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
              fill="#8884d8"
              label={false} // 🔹 remove os números fora do gráfico
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '8px',
                color: '#F8FAFC',
              }}
            />
            <Legend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              wrapperStyle={{
                color: '#F8FAFC',
                fontSize: 14,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
