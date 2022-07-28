import dynamic from 'next/dynamic';

const Mymap = dynamic(() => import('./Mymap'), {
  ssr: false
})

export default Mymap;