import { PieChart, Pie, Cell} from 'recharts';
import { getStoredDonations } from './LocalStorage';

const Statistics = () => {

    const totDonations = getStoredDonations();
    // console.log(totDonations);

    const total = totDonations.length;
    // console.log(total);
    const data = [
        { name: 'Group A', value: total },
        { name: 'Group B', value: (12-total) },

    ];

    const COLORS = ['#0088FE', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className='w-full'>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <PieChart className='mx-auto' width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={160}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div className='flex flex-col md:flex-row w-full justify-center gap-8'>
                    <div className='flex items-center gap-2'>
                        <p>Your Donation </p>
                        <div className='h-2 w-20 bg-[#0088FE]'>

                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>Total Donation </p>
                        <div className='h-2 w-20 bg-[#00C49F]'>

                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Statistics;