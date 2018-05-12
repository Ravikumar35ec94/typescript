var fbAboutdata = /** @class */ (function () {
    function fbAboutdata(Id, _dateOfBirth, _phoneNo, _city, _Gender) {
        this.abvd = function () {
            console.log('arrow function');
        };
        this.fbId = Id;
        this.dateOfBirth = _dateOfBirth;
        this.phoneNo = _phoneNo;
        this.city = _city;
        this.Gender = _Gender;
    }
    fbAboutdata.prototype.getage = function () {
        //calculate nd return age
        console.log('get age');
    };
    fbAboutdata.prototype.workedat = function () {
        //get the list of comp. worked at and currently working at
        console.log('companies worked at');
    };
    fbAboutdata.prototype.getFamilyMember = function () {
        //get the list of family members in friend list in fb
        console.log('get family members');
    };
    fbAboutdata.prototype.getProfessionalSkills = function () {
        //get professional skills
        console.log('get professional skills');
    };
    fbAboutdata.prototype.getEducationalDetails = function () {
        //get list of school and collages attended
        console.log('get educational details');
    };
    fbAboutdata.prototype.getPlacesLived = function () {
        //get the list of places lived
        console.log('get places lived');
    };
    fbAboutdata.prototype.getBasicInfo = function () {
        //get the basic information
        console.log('get basic info');
    };
    fbAboutdata.prototype.getRelationshipStatus = function () {
        //get the relationship status and information
        console.log('get relationship status');
    };
    fbAboutdata.prototype.getLifeEvents = function () {
        //get the relationship status and information
        console.log('get life events');
    };
    return fbAboutdata;
}());
var a = new fbAboutdata('xyzabc123', '28-September-1991', 1234567892, 'Kolkata', 'Male');
a.getage();
a.workedat();
a.getFamilyMember();
a.getProfessionalSkills();
a.getEducationalDetails();
a.getPlacesLived();
a.getBasicInfo();
a.getRelationshipStatus();
a.getLifeEvents();
