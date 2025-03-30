
import React from 'react';
import { Property, getLowestHistoricalPrice, getPriceTrend } from '@/data/properties';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Minus, ArrowDown } from 'lucide-react';

interface PriceTrendAnalysisProps {
  property: Property;
}

const PriceTrendAnalysis = ({ property }: PriceTrendAnalysisProps) => {
  if (!property.priceHistory || property.priceHistory.length < 3) {
    return null;
  }

  const trend = getPriceTrend(property);
  const lowestPrice = getLowestHistoricalPrice(property);
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
  };

  // Format data for the chart
  const chartData = property.priceHistory.map(item => ({
    date: formatDate(item.date),
    price: item.price
  }));

  const TrendIcon = trend.trend === 'up' 
    ? <TrendingUp className="h-5 w-5 text-red-500" /> 
    : trend.trend === 'down' 
      ? <TrendingDown className="h-5 w-5 text-green-500" /> 
      : <Minus className="h-5 w-5 text-gray-500" />;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Price Trend Analysis {TrendIcon}
        </CardTitle>
        <CardDescription>
          {trend.trend === 'up' 
            ? `Rent prices have increased by ${trend.percentage}% over the past year`
            : trend.trend === 'down'
              ? `Rent prices have decreased by ${trend.percentage}% over the past year`
              : 'Rent prices have remained stable over the past year'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }} 
                tickFormatter={(value) => value.split(' ')[0]}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `₹${Math.round(value / 1000)}k`}
              />
              <Tooltip 
                formatter={(value) => [`₹${value}`, 'Price']}
                labelFormatter={(label) => `Date: ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#3B82F6" 
                strokeWidth={2} 
                dot={{ r: 3 }} 
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {lowestPrice && (
          <div className="flex items-center rounded-lg bg-blue-50 p-3">
            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <ArrowDown className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <p className="font-medium text-gray-700">
                Lowest historical price: <span className="text-blue-700">₹{lowestPrice.price.toLocaleString()}</span>
              </p>
              <p className="text-sm text-gray-600">
                Recorded in {formatDate(lowestPrice.date)}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceTrendAnalysis;
