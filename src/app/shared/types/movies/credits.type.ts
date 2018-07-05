export class CreditsDescriptor {

    public id: number;
    public cast: CastDescriptor[] = [];
    public crew: CrewDescriptor[] = [];

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof CreditsDescriptor
     */
    public static import(rawData: any): CreditsDescriptor {
        let credits: CreditsDescriptor = new CreditsDescriptor();


        credits.id = rawData.hasOwnProperty('id') ? rawData.id : null;

        let crew: CrewDescriptor;
        if (rawData.hasOwnProperty("crew")) {
            console.log(rawData.crew.length);
            for (let i = 0; i < rawData.crew.length; i++) {
                let row: any = rawData.crew[i];
                crew = CrewDescriptor.import(row);
                credits.crew.push(crew);
            }
        }

        let cast: CastDescriptor;
        if (rawData.hasOwnProperty("cast")) {
            console.log(rawData.cast.length);
            for (let i = 0; i < rawData.cast.length; i++) {
                let row: any = rawData.cast[i];
                cast = CastDescriptor.import(row);
                credits.cast.push(cast);
            }
        }


        return credits;
    }
}


export class CrewDescriptor {
    public credit_id: string;
    public department: string;
    public gender: number;
    public id: number;
    public job: string;
    public name: string;
    public profile_path: string;


    public static import(rawData: any) {
        let crewDescriptor: CrewDescriptor = new CrewDescriptor();

        crewDescriptor.credit_id = rawData.hasOwnProperty('credit_id') ? rawData.credit_id : '';
        crewDescriptor.department = rawData.hasOwnProperty('department') ? rawData.department : '';
        crewDescriptor.gender = rawData.hasOwnProperty('gender') ? rawData.gender : -1;
        crewDescriptor.id = rawData.hasOwnProperty('id') ? rawData.id : -1;
        crewDescriptor.job = rawData.hasOwnProperty('job') ? rawData.job : '';
        crewDescriptor.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        crewDescriptor.profile_path = rawData.hasOwnProperty('profile_path') ? rawData.profile_path : '';
        return crewDescriptor;
    }
}


export class CastDescriptor {
    public cast_id: number;
    public character: string;
    public credit_id: string;
    public gender: number;
    public id: number;
    public name: string;
    public order: number;//starts in 0
    public profile_path: string;

    public static import(rawData: any) {
        let castDescriptor: CastDescriptor = new CastDescriptor();

        castDescriptor.credit_id = rawData.hasOwnProperty('credit_id') ? rawData.name : '';
        castDescriptor.cast_id = rawData.hasOwnProperty('cast_id') ? rawData.cast_id : -1;
        castDescriptor.character = rawData.hasOwnProperty('character') ? rawData.character : '';
        castDescriptor.id = rawData.hasOwnProperty('id') ? rawData.id : -1;
        castDescriptor.gender = rawData.hasOwnProperty('gender') ? rawData.gender : -1;
        castDescriptor.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        castDescriptor.profile_path = rawData.hasOwnProperty('profile_path') ? rawData.profile_path : '';
        castDescriptor.order = rawData.hasOwnProperty('order') ? rawData.id : -1;
        return castDescriptor;
    }
}