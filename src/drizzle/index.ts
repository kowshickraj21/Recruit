import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon('postgresql://Recrute_owner:Qq8uhV3JHPbD@ep-fancy-scene-a18ji3me.ap-southeast-1.aws.neon.tech/Recrute?sslmode=require');
export const db = drizzle(sql);
