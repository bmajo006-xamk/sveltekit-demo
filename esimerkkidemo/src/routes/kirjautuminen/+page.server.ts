import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

let nimi : any = "";
export const load : PageServerLoad = async () => {
  return {
    nimi
    
  }
}
export const actions : Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("kayttajanimi");
    console.log(formData);
    nimi  = name;

  }
}