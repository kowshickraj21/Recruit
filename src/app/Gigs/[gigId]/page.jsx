import React from 'react'
import HomeNav from '@/app/(components)/HomeNav';
import fetchUser from '@/app/api/Users/setDetails';
import { connectMongoDB } from '@/models/mongodb';
import Gigs from '@/models/gigs';
import User from '@/models/user';
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";

const page = async (props) => {
    const user = await fetchUser(); 
    await connectMongoDB();
    const gig = await Gigs.findOne({_id :props.params.gigId});
    const imageData = gig.image
      const base64Image = Buffer.from(imageData).toString('base64');
      const image = (`data:image/png;base64,${base64Image}`);
      const author = await User.findOne({email: gig.email});
  return (
    <div>
      <HomeNav picture={user.picture}/>
      <div className='flex flex-row justify-evenly mt-10'>
        <div className='w-1/2'>
          <div className='border-b-2'>
          <h2 className='font-semibold text-3xl text-gigText mt-5 p-5'>{gig.title}</h2>
          <div className=' my-3 ml-5 w-52'>
            <Image src={author.picture} width={45} height={30} alt='profile' className='rounded-full m-1 h-auto w-auto float-left p-2' />
            <p className='font-semibold text-gigText text-sm pt-4 cursor-pointer hover:underline'>{author.name}</p>
            <p className='py-1 text-sm flex flex-row align-middle font-semibold text-gigText cursor-pointer hover:underline'><FaStar className='w-8 mt-0.5' /> 5.0</p>
          </div>
          <br className='bg-black'/>
          </div>
          <div>
          <h2 className='font-semibold text-xl text-gigText mt-5 p-5'>About This Gig:</h2>
          <p className='p-5 indent-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus reprehenderit deserunt dolorum architecto, expedita facilis ipsam asperiores sapiente quo. Recusandae dolorum tempore numquam doloribus similique tempora non odio. Fugit, recusandae? Ad corrupti delectus optio libero molestiae, at magnam. Dolor, sunt. In libero est vitae a non rerum maxime exercitationem architecto magni unde ducimus temporibus iusto omnis repellendus distinctio voluptatibus commodi veniam, quibusdam quidem necessitatibus iste? Nemo corrupti non unde laboriosam, reiciendis officiis voluptate velit delectus quasi explicabo itaque neque id repudiandae eum error! Recusandae quis deserunt vero quia hic at. Expedita quidem nemo magni reprehenderit cum corporis necessitatibus? Corrupti qui nam iste accusantium quas maiores ipsam doloribus dolores corporis modi accusamus velit in, dolorem quidem optio quod amet repudiandae dicta blanditiis repellendus saepe atque officiis. Natus reprehenderit nihil distinctio, voluptatem cum officia minus et illo, eveniet ipsa doloremque nulla quos quae, voluptas laboriosam dolorem voluptatibus dolorum suscipit? Eum amet aperiam deleniti natus expedita ut iure. Id dolorum cumque, repellendus placeat qui eligendi! Totam omnis explicabo, recusandae unde animi illo perferendis expedita nulla, odio amet ipsum reprehenderit earum eum debitis veritatis. Quidem velit doloribus rem error voluptas itaque magnam quia ipsam ea non, voluptates ab omnis obcaecati sapiente exercitationem? Mollitia aliquid quae, saepe quia repudiandae nobis sint odit ducimus libero asperiores dolor animi temporibus cumque ipsum. Pariatur placeat ipsam temporibus odit dolor voluptatibus nulla libero reprehenderit, aspernatur recusandae voluptate molestias quae rerum hic facilis, ipsa, optio eveniet sapiente ducimus consequuntur nam aperiam ea quo labore. Adipisci qui itaque veritatis. Harum aut omnis accusamus saepe cum voluptas, sed magnam sit accusantium error. Provident esse quod tempore repellendus veniam aut quas quo excepturi officia, doloremque saepe nesciunt aspernatur beatae, repudiandae amet quos tempora ipsa dolor ipsam vero? Praesentium alias dignissimos natus facere qui eius, saepe porro tempore culpa harum explicabo architecto, inventore maiores molestias laudantium quaerat voluptatem in, molestiae accusamus doloribus. Veniam fugit mollitia facere vero nisi unde fuga officiis et quam a, sint distinctio minima sed tempore, eaque aspernatur accusamus neque harum! Sed provident reprehenderit minus quod adipisci. Laboriosam molestiae beatae, obcaecati repudiandae saepe voluptate aliquid aspernatur esse hic natus ad, unde deserunt animi porro rerum. Omnis id ad, quaerat odit odio magni quisquam facere natus, molestiae voluptas quam adipisci mollitia, sit dolorum dolorem eum expedita nemo facilis modi sunt eligendi iste aliquid quas? Sapiente voluptas nostrum at porro! Repellendus hic perspiciatis expedita illum harum quia assumenda adipisci quos error quae excepturi nulla deserunt aliquid quisquam, corporis ad praesentium? Adipisci sit doloremque aut ullam cumque nulla, animi delectus perspiciatis provident officiis? Inventore tempore tempora minus ducimus, accusamus nisi illum aperiam eaque earum eligendi quidem optio. Nostrum quidem dolores odio sit dicta totam, perspiciatis sequi voluptatum cupiditate? Impedit earum magnam natus, laudantium deserunt sit quas, labore maxime nemo aliquid voluptate delectus iure consequatur id aspernatur commodi libero veritatis quaerat! Quam ratione aperiam quasi sit rerum non voluptates laborum tempore, eius, doloremque maiores voluptatum corporis mollitia dolorum, beatae similique id fugit quos exercitationem optio suscipit iure. Enim asperiores veritatis, ipsum a reiciendis omnis.</p>
          </div>
        </div>
        <div className='w-2/5 h-96 overflow-hidden bg-gray-100 sticky top-0 mr-5' >
        <img src={image} className='object-fit m-auto h-96 w-full'/>

        </div>
      </div>
    </div>
  )
}

export default page
