export interface EventInfo {
    name: string;
    category: 'techincal' | 'nontechnical';
    type: 'team' | 'solo';
    online: boolean;
    fee: {
        type: 'flat' | 'perHead';
        amount: number;
    };
    description: string;
    rules: string[];
    prizes: string[];
    organizers: string[];
    teamSize: {
        min: number,
        max: number,
    };
    maxTeams: number | 'unlimited';
    time?: string;
    venue?: string;
}

const eventsLiteral: { [key: string]: EventInfo } = {
    'code_hunt': {
        name: 'Hunt for Code',
        category: 'technical',
        type: 'team',
        online: false,
        fee: {
            type: 'flat',
            amount: 100,
        },
        description: 'Unleash your inner explorer and coding genius in our thrilling Treasure Hunt & Coding Challenge event! Navigate through hints and write ingenious code to unlock exciting prizes. Join us for an adventure that combines tech and treasure in one exhilarating journey!',
        rules: [
            'Participating team should mandatorily consist of 2 members. Seeking help from others is considered a violation. Destructive behavior is strictly prohibited.',
            'Use of mobile phones during the coding phase would lead to elimination. Make sure the clue is followed in sequential order.',
            'The participants are requested to obtain the hint only from the disguised member mentioned in the clues.',
            'The first 5 teams to solve the clues and coding phase will be qualified for the next round.',
            'The qualified teams will receive problem statements of a greater difficulty and will be asked to solve any one of them randomly.',
            'The first 3 teams to solve the challenge will be announced as winners.'
        ],
        prizes: [
            'TBD',
            'TBD',
            'TBD'
        ],
        teamSize: {
            min: 2,
            max: 2,
        },
        maxTeams: 8,
        organizers: [
            'Aadhithya - 9514582641',
            'Sujesh - 8072130580'
        ]

    },
    'bug_off': {
        name: 'Bug Off',
        category: 'technical',
        type: 'team',
        online: false,
        fee: {
            type: 'perHead',
            amount: 50,
        },
        description: 'For the first round twenty multiple-choice questions (MCQs) covering debugging and general concepts in Java, C++, and Python.Teams whichare qualified for the second round will receive questions on HackerRank that contain code with errors, and their objective is to correct these errors. The team that successfully fixes most questions will be crowned the winners.',
        rules: [
            'Only the Top 10 teams from Round 1 will progress to Round 2',
            'For Round 2, you have the flexibility to choose between CPP, Python, and Java   to perform debugging tasks.',
            'A Hackerrank account is a must for Round 2.',
            'The judge decision is final.'

        ],
        prizes: [
            'TBD',
            'TBD',
            'TBD'
        ],
        teamSize: {
            min: 1,
            max: 2,
        },
        maxTeams: 8,
        organizers: [
            'Hafeeludden - 7358275575',
            'Praiseline - 9444513978'
        ]

    },
    'pair_programming': {
        name: 'Pair Programming',
        category: 'technical',
        type: 'team',
        online: false,
        fee: {
            type: 'flat',
            amount: 100,
        },
        description: 'The event has two rounds: Pattern Programming and HackerRank coding problems. Each team has two members who take turns coding without discussing for a specific amount of time.',
        rules: [
            'Teams consist of two members.', 
            'No discussion between team members.',
            'No smartphone or smartwatch usage.',
            'Follow coding time allocation.',  
            'Cheating leads to disqualification.',
            'Round 1 elimination.',
            'Highest score wins.',
            'Hackerrank Account ID required.',
            'Each person codes for a specific amount of time.'


        ],
        prizes: [
            'TBD',
            'TBD',
            'TBD'
        ],
        teamSize: {
            min: 2,
            max: 2,
        },
        maxTeams: 8,
        organizers: [
            'Naveen - 6369520129',
            'Pooja - 8610479340'
        ]

    },
    'design_decode': {
        name: 'Design Decode',
        category: 'technical',
        type: 'team',
        online: false,
        fee: {
            type: 'flat',
            amount: 100,
        },
        description: 'Join us for an exciting CSS Design Challenge! Show off your web design skills and creativity as you compete in themed design challenges, attend CSS workshops, and network with fellow designers. ',
        rules: [
            'Teams should consist of up to 2 members.',
            'In the first round, a quiz will be conducted for 10 minutes in Quizizz. The top 10-15 teams will move on to the second round based on it. ',            
            'In the second round, each team will receive a website design with some basic code (HTML). Your task is to make it look great by writing the CSS code. You guys can discuss it for 10 minutes.',
            'Second round is for 40 minutes. One team member from each team will start and write the code for 20 minutes, after which you would swap with your team member and would code for the final 20 minutes. ',
            'Make sure to finish your work within the set time limit; late submissions might not be considered. ',
            'Your designs will be judged by juries based on how creative, innovative, accurate, and efficient your CSS code is, as well as how well it follows the given guidelines.',
            
            

        ],
        prizes: [
            'TBD',
            'TBD',
            'TBD'
        ],
        teamSize: {
            min: 2,
            max: 2,
        },
        maxTeams: 8,
        organizers: [
            'Aadhithya - 9514582641',
            'Sujesh - 8072130580'
        ]

    },
    'jargon_busters': {
        name: 'Jargon Busters',
        category: 'technical',
        type: 'team',
        online: false,
        fee: {
            type: 'perHead',
            amount: 50,
        },
        description: 'Teams will receive a topic 30 minutes before the event. They must create a PowerPoint presentation to explain the technical subject without using any technical jargons. The teams performance is evaluated according to their PowerPoint presentation, comprehension of the subject matter, and their capability to effectively explain the topic.',
        rules: [
             'Teams will receive their topics on the spot just before the event.',
             'A time frame of 30 to 40 minutes will be provided to prepare a PowerPoint presentation on the given topic.',
             'Teams will be required to submit the final version of their PowerPoint before the event commences.',
             'Each team will have a 10-minute slot to present their PowerPoint and explain the topic.',
             'Following the presentation, the judges will ask questions to assess the teams understanding of the topic.',
             'Any use of technical terminology will result in disqualification.',
             'The judges decision is final.'

            

        ],
        prizes: [
            'TBD',
            'TBD',
            'TBD'
        ],
        teamSize: {
            min: 1,
            max: 2,
        },
        maxTeams: 8,
        organizers: [
            'Tauseef - 8667556475',
            'Shyam - 9566594962'
        ]

    },
    'qr_quest': {
        name: 'QR Quest',
        category: 'technical',
        type: 'team',
        online: false,
        fee: {
            type: 'perHead',
            amount: 50,
        },
        description: 'Join the QR Scavenger Hunt! Scan, solve, and conquer thrilling challenges in this modern-day adventure. Embark on a high-tech quest filled with intrigue. Scan QR codes to unlock riddles and unveil hidden mysteries. Strategize, and race against time to solve each clue. Get ready to decode the excitement!',
        rules: [
              'Individual or Team: Up to 2 members can be in a team',
              'Each team will receive a QR code, an image that you can scan with your smartphone.Scanned QRs will contain programming problems to be solved.',
              'Round 1 will have python coding problems.The first round will be for 20 minutes and the top five teams will advance to the final round.',
              'Round 2 will contain both Java and C coding problems as a choice for you to solve.',
              'The first two teams to solve all the questions within the stipulated time will be declared as the winner and runner.',
              'The top two teams will receive prizes.',
              'Individual or Team: Up to 2 members can be in a team',
              'Each team will receive a QR code, an image that you can scan with your smartphone.Scanned QRs will contain programming problems to be solved.',
              'Round 1 will have python coding problems.The first round will be for 20 minutes and the top five teams will advance to the final round.',
              'Round 2 will contain both Java and C coding problems as a choice for you to solve.',
              'The first two teams to solve all the questions within the stipulated time will be declared as the winner and runner.',
              'The top two teams will receive prizes.',
                        
            

        ],
        prizes: [
            'TBD',
            'TBD',
            'TBD'
        ],
        teamSize: {
            min: 1,
            max: 2,
        },
        maxTeams: 8,
        organizers: [
            'Hari Prasad - 9176697669',
            'Lijesh - 6379131341'
        ]

    },
    'treasure_hunt': {
        name: 'E - Treasure Hunt',
        category: 'technical',
        type: 'team',
        online: false,
        fee: {
            type: 'perHead',
            amount: 50,
        },
        description: 'Are you ready for an exhilarating adventure like no other?Join us for : The Great E-Treasure Hunt," an electrifying virtual treasure hunt that will test your wits, teamwork, and tech-savvy skills!',
        rules: [
            'Participants can form teams with a maximum of 2 members or play  individually.',
            'The E-Treasure Hunt will take place for 45 Minutes',            
            'Participants will receive a series of online clues and riddles that lead them closer to the ultimate treasure.',            
            'The hunt begins with an email sent to all registered participants at This email will contain the first clue.',   
            'This treasure hunt is entirely virtual, and participants do not need to visit physical locations. The ultimate treasure is a digital certificate of achievement.',           
            'Participants earn points for each clue solved. The participant or team with the most points at the end will be declared the winner. 10 points for each correct clue solved.',
            'Collaboration or sharing of answers among participants is strictly prohibited. Any form of cheating will result in disqualification.',
            
        ],
        prizes: [
            'TBD',
            'TBD',
            'TBD'
        ],
        teamSize: {
            min: 1,
            max: 2,
        },
        maxTeams: 8,
        organizers: [
            'Srinivasan - 8525873211',
            'Arun - 7598810481'
        ]

    },
    'tech_feud': {
        name: 'Tech Feud',
        category: 'technical',
        type: 'team',
        online: false,
        fee: {
            type: 'flat',
            amount: 150,
        },
        description: 'Join us for ‘Technical Feud’ , a high-energy competition where teams face off in a battle of tech knowledge, answering questions to prove who’s the tech-saviest team!',
        rules: [
            'The one to hit the buzzer first gets the chance to answer.',
            'Teams aim to guess all 5 answers for points.',
            'Highest priority answer = 20 points.',
            'Answers with less priority are awarded accordingly',
            'Each team has 2 lives.',
            'If a team loses both the lives, then the opposing team gets a single chance to answer the question and steal their points',
            'Rounds are conducted in a knockout fashion.',

        ],
        prizes: [
            'TBD',
            'TBD',
            'TBD'
        ],
        teamSize: {
            min: 3,
            max: 3,
        },
        maxTeams: 8,
        organizers: [
            'Ashwin Ram - 9884686271',
            'Sanjay - 6379533970'
        ]

    },
}

export const events: Map<string, EventInfo> = new Map(Object.entries(eventsLiteral));


