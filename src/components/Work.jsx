import React from 'react'
import WorkItem from './WorkItem'

const data=[
    {
        year:'09.11.2023-Halen',
        company:'ATIKCODE',
        title:'CO-Founder & Software Developer',
        duration:'Halen',
        details:
        'Proje Yönetimi · React.js · MySQL · C# · ASP.NET Core · WebApi · HTML5 · CSS · JavaScript'
    },
    {
        year:'08.05.2023-08.09.2023',
        company:'MotapERP',
        title:'Software Developer',
        duration:'5 Ay',
        details:
        'DevExpress · .NET · MySQL'
    },
    {
        year:'13.08.2021-13.09.2021',
        company:'Düzce Üniversitesi',
        title:'Stajyer',
        duration:'1 Ay',
        details:
        'Düzce Üniversitesi İşletme Fakültesi Dekanlığı Bilgi İşlem Stajyeri.'
    },
]


const Work=() =>{
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bol text-center font-bold  text-[#001b5e]'>Deneyim</h1>
      {data.map((item,idx)=>(
        <WorkItem key={idx} 
        year={item.year} 
        title={item.title} 
        company={item.company}
         duration={item.duration}
         details={item.details}
         />

      ))}
    </div>
  )
}
export default Work
