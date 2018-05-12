class fbAboutdata{
    private fbId: string;
    private phoneNo: number;
    private dateOfBirth: any;
    private city: string;
    private Gender: string;

    constructor(Id:string,_dateOfBirth:any,_phoneNo:number,_city:string,_Gender:string) {
        this.fbId = Id;
        this.dateOfBirth = _dateOfBirth;
        this.phoneNo = _phoneNo;
        this.city = _city;
        this.Gender = _Gender;
    }

    getage():any { 
            //calculate nd return age
            console.log('get age')
    }
    workedat(): any{
        //get the list of comp. worked at and currently working at
        console.log('companies worked at')
    }

    getFamilyMember(): any{
        //get the list of family members in friend list in fb
        console.log('get family members')
    }

    getProfessionalSkills(): any{
        //get professional skills
        console.log('get professional skills')
    }

    getEducationalDetails(): any{
        //get list of school and collages attended
        console.log('get educational details')
    }

    getPlacesLived(): any{
        //get the list of places lived
        console.log('get places lived')
    }

    getBasicInfo(): any{
        //get the basic information
        console.log('get basic info')
    }

    getRelationshipStatus(): any{
        //get the relationship status and information
        console.log('get relationship status')
    }

    getLifeEvents(): any{
        //get the relationship status and information
        console.log('get life events')
    }
}

let a=new fbAboutdata('xyzabc123','28-September-1991',1234567892,'Kolkata','Male');
a.getage();
a.workedat();
a.getFamilyMember();
a.getProfessionalSkills();
a.getEducationalDetails();
a.getPlacesLived();
a.getBasicInfo();
a.getRelationshipStatus();
a.getLifeEvents();