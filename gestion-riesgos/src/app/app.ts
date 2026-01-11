import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Gestión de Riesgos Pymes';

  services = [
    {
      id: 1,
      title: 'Identificación de riesgos',
      desc: 'Identificamos los principales riesgos que pueden impactar tu proyecto o negocio.',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'Planificación de riesgos',
      desc: '"Planificamos medidas sencillas para adelantarte a los principales riesgos".',
      icon: '📝'
    },
    {
      id: 3,
      title: 'Matriz RBS básica',
      desc: 'Organizamos los riesgos en una manera fácil de entender y a la medida de tu Pyme.',
      icon: '📊'
    },
    {
      id: 4,
      title: 'Sensibilización y capacitación',
      desc: 'Ejemplificamos la gestión de riesgos con casos reales y en palabras sencillas.',
      icon: '🎓'
    }
  ];

  adnPoints = [
    'Compromiso con la realidad de cada negocio.',
    'Claridad en el lenguaje y en las herramientas.',
    'Colaboración como forma de decidir.',
    'Pensamiento crítico para la mejora de procesos.',
    'Ética en cada acción y recomendación.'
  ];

  rbsData = [
    { cat: 'Operativo', riesgo: 'Daños en equipos', desc: 'Daños que retrasen entregas', prob: 'Media', imp: 'Alta', accion: 'Revisiones y mantenimiento' },
    { cat: 'Financiero', riesgo: 'Costos', desc: 'Subida inesperada de insumos', prob: 'Alta', imp: 'Media', accion: 'Buscar otras opciones de compra' },
    { cat: 'Humano', riesgo: 'Personal', desc: 'Falta de personal clave', prob: 'Media', imp: 'Alta', accion: 'Capacitar a más de una persona' },
    { cat: 'Legal', riesgo: 'Normativo', desc: 'Incumplir normas sanitarias', prob: 'Baja', imp: 'Alta', accion: 'Controles y capacitaciones' },
    { cat: 'Comercial', riesgo: 'Ventas', desc: 'Bajos niveles de demanda', prob: 'Media', imp: 'Media', accion: 'Ajustar productos o canales' }
  ];
}
