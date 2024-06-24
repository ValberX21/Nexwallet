import  { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Fevereiro',
    entrada: 4000,
    saida: 0, 
  },
  {
    name: 'Março',
    entrada: 3000,
    saida: 0,
  },
  {
    name: 'Abril',
    entrada: 2000,
    saida: 0,
  },
  {
    name: 'Maio',
    entrada: 2780,
    saida: 0,
  },
  {
    name: 'Junho',
    entrada: 1890,
    saida: 0,
  },
];

interface TinyBarChartState {
  showSaida: boolean;
}

export default class TinyBarChart extends PureComponent<object, TinyBarChartState> {
  constructor(props: object) {
    super(props);
    this.state = {
      showSaida: false, 
    };
  }

  toggleSaida = () => {
    this.setState((prevState) => ({
      showSaida: !prevState.showSaida,
    }));
  };

  render() {
    const { showSaida } = this.state;

    return (
      <div style={{ width: '100%', height: 300 }} className="pt-10">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend onClick={this.toggleSaida} />
            <Bar dataKey="entrada" fill="#8884d8" name="Entrada" stackId="stack" />
            <Bar dataKey="saida" fill="#A9A9A9" name="Saída" stackId="stack" opacity={showSaida ? 1 : 0} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
