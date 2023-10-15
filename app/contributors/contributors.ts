
export interface ContributorsInfo{

    type:string;
    header:string;
    name?: string[];
    name_designation ?: [{
        name:string,
        designation:string,
    }];

}

const contributorsLiteral : { [key:string]: Contributors} = {
    'Staff Coordinators':{
        type: 'Single',
        header: 'Staff Coordinators',
        name: [
           'Dr. G.S.Anandha mala',
           'Dr.K.M.Anandkumar',
           'Dr.S.Kayalvizhi',
           'Mrs.A.Abirami',
           'Ms.S.Bhuvaneswari'
        ]
    },
    'Website Team' : {
        type:'Single',
        header: 'Website Team',
        name: [
            'Nithish Kumar R',
            'Rohith C'
        ]
    },
    'Office Bearers' : {
        type:'Double',
        header:'Office Bearers',
        name_designation:[
            {
                name:'Janagan U S',
                designation:'President'
            },
            {
                name:'Hariharan B',
                designation:'Executive President'
            },
            {
                name:'Dinesh S',
                designation:'Treasurer (Sponsorship)'
            },
            {
                name:'Saipriya S',
                designation:'Treasurer (Internal'
            },
            {
                name:'Akil Chakravarthi A',
                designation:'Vice President'
            },
            {
                name:'Sunjay K S',
                designation:'Secretary'
            },
            {
                name:'Mohammed Anees P V',
                designation:'Joint Secretary'
            },
        ]
    }

}

export const contributors : Map<string, ContributorsInfo> = new Map(Object.entries(contributorsLiteral));