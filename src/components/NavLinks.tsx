import Link from 'next/link';
import React from 'react';
interface Navs{
  id:string,
  slug:string,
  nameBn:string,
  icon:string
}
const NavLinks = async() => {
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories');
  const data = await res.json();
  console.log(data[0].nameBn);
  return (
    <div className='flex gap-2'>
      {
        data.map((n:Navs) => (<Link key={n.id} href={n.slug}><span>{n.icon}</span>{n.nameBn}</Link>))
      }
    </div>
  );
};

export default NavLinks;