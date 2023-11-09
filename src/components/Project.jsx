import React from 'react'
import ProjectItem from './ProjectItem'
import Image1 from '../images/2.jpg'
import Image2 from '../images/3.jpg'
import Image3 from '../images/4.jpg'
import Image4 from '../images/5.jpg'


const Project=()=> {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projelerim</h1>
      <p className='text-center py-0'>
      Eğitim sürecim boyunca yazılım araştırma, öz motivasyon, girişimcilik ve farklı beceriler edinme konularında kendimi geliştirdim. Özgeçmişimde görebileceğiniz gibi farklı eğitimler ve bireysel araştırmalarla kendimi iş hayatına hazırladım.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={Image1} title='ATIKCODE' />
        <ProjectItem img={Image2} title='ATIKCODE'/>
        <ProjectItem img={Image3} title='ATIKCODE'/>
         <ProjectItem img={Image4} title='ATIKCODE'/>
      </div>
    </div>
  )
}
export default Project
