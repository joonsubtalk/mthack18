export const data = {
    hosting : [
        {
            title: "Managed Wordpress",
            color: "#ffd02b",
            id: 'MWP',
            description: "High-performance hosting for your WordPress sites, from personal projects to high-profile clients.",
            plans: [
                {
                    type : 'Personal',
                    tag : 'Get started with WordPress with room to grow.',
                    price : 20,
                    offerings : [
                        '2 sites',
                        '50GB SSD storage',
                        '250,000 monthly visitors',
                        'Unlimited data transfer',
                    ],
                    link : 'https://mediatemple.net/go/order?plan=mwp_personal&amp;payment_term=1'
                },
                {
                    type : 'Pro',
                    tag : 'Explore new ideas or take your business to the next level.',
                    price : 60,
                    offerings : [
                        '10 sites',
                        '200GB SSD storage',
                        '500,000 monthly visitors',
                        'Unlimited data transfer',
                    ],
                    link : 'https://mediatemple.net/go/order?plan=mwp_pro&amp;payment_term=1'
                }
            ]
        },
        {
            title: "Shared Hosting",
            color: "#f26767",
            id: "Grid",
            description: "Better architecture. Better support. Media Temple’s Grid is better shared hosting."
        },
        {
            title: "VPS Hosting",
            color: "#67a8da",
            id: "VPS",
            description: "Professional-grade virtual private servers, with or without your choice of control panel."
        },
        {
            title: "AWS Hosting",
            color: "#faaf43",
            id: "AWS",
            description: "Get the most out of your Amazon cloud, fully managed by certified SysAdmins & Cloud Architects."
        }]
}