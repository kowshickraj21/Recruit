import bcrypt from "bcryptjs";
import {db} from '@/drizzle/index.ts';
import {user} from '@/drizzle/schema.ts';
import { eq } from "drizzle-orm";

export default async function signUp(formData){
    const exists = await db.select().from(user).where(eq(user.email, formData.email));
    console.log(exists);
    if(exists.length > 0){
      return false;
    }else{
      const hashPassword = await bcrypt.hash(formData.password, 10);
      formData.password = hashPassword;
      formData.picture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
      await db.insert(user).values(formData);
      console.log(formData);
      return true;
}
}