"use server"    
import {db} from '@/drizzle/index.ts';
import {gigs} from '@/drizzle/schema.ts';
import fetchUser from '@/app/api/Users/setDetails';


export const handleSubmit = async(formData,link) => {
    
    const user = await fetchUser();

    if(link != ""){
    formData.append('image', link);
    formData.append('email', user.email);

    const formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
    await db.insert(gigs).values(formObj);
    form.current?.reset()
    return("Gig created Successfully");
    }
    return("Upload A Picture");
  }