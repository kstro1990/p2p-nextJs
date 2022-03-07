import React from 'react'
import Link from 'next/link'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';


const Navbar = () => {

  const items =[
    {
       label:'File',
       icon:'pi pi-fw pi-file',
       items:[
          {
             label:'New',
             icon:'pi pi-fw pi-plus',
             items:[
                {
                   label:'Bookmark',
                   icon:'pi pi-fw pi-bookmark'
                },
                {
                   label:'Video',
                   icon:'pi pi-fw pi-video'
                },

             ]
          },
          {
             label:'Delete',
             icon:'pi pi-fw pi-trash'
          },
          {
             separator:true
          },
          {
             label:'Export',
             icon:'pi pi-fw pi-external-link'
          }
       ]
    },
    {
       label:'Quit',
       icon:'pi pi-fw pi-power-off'
    }
 ];
  
  return (
    <>
        <nav>
            <menu>
                <Link href="/"><a className='p-tabmenuitem'>Home</a></Link>
                <Link href="/about"><a className='p-tabmenuitem'>About</a></Link>
            </menu>
        </nav>

        <Menubar model={items}/>
    </>
  )
}

export default Navbar