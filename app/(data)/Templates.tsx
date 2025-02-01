export default [
    {
        name:'Blog Title',
        desc:'Ai tool that generate blog title based on your blog outlines or description',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog titles based on the niche, and the outlines of the blog provided, also give the result in rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true,
            },
            {
                label:'Enter blog outlines (optional)',
                field:'textarea',
                name:'outline',
            }
        ]
    },

    {
        name: 'Name Generator',
        desc: 'AI tool that generates creative names based on the given keywords or criteria.',
        category:'Others',
        icon: 'https://cdn-icons-png.flaticon.com/128/2850/2850104.png',
        aiPrompt: 'Generate a list of creative names based on the provided keywords or criteria.',
        slug: 'generate-name',
        form: [
            {
                label: 'Enter keywords for the name',
                field: 'input',
                name: 'keywords',
                required: true,
            }
        ]
    },
    
    {
        name: 'Content Generator',
        desc: 'AI tool that generates content based on the provided outline or topic.',
        category:'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9079/9079294.png',
        aiPrompt: 'Generate detailed content based on the provided outline or topic. Provide the result in rich text editor format.',
        slug: 'generate-content',
        form: [
            {
                label: 'Enter your content topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter content outline (optional)',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    
    {
        name: 'YouTube Tags Generator',
        desc: 'AI tool that generates YouTube tags based on the provided video information.',
        category:'Youtube',
        icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884883.png',
        aiPrompt: 'Generate a list of YouTube tags based on the provided video information. Provide the result in rich text editor format.',
        slug: 'generate-youtube-tags',
        form: [
            {
                label: 'Enter your video title',
                field: 'input',
                name: 'title',
                required: true,
            },
            {
                label: 'Enter video description (optional)',
                field: 'textarea',
                name: 'description',
            }
        ]
    },
    
    {
        name: 'Instagram Tags Generator',
        desc: 'AI tool that generates Instagram tags based on the provided information.',
        category:'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174855.png',
        aiPrompt: 'Generate a list of Instagram tags based on the provided information. Provide the result in rich text editor format.',
        slug: 'generate-instagram-tags',
        form: [
            {
                label: 'Enter your Instagram post topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter additional details (optional)',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    
    {
        name: 'Twitter Hashtag Generator',
        desc: 'AI tool that generates trending Twitter hashtags based on the provided topic.',
        category:'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
        aiPrompt: 'Generate a list of trending Twitter hashtags based on the provided topic.',
        slug: 'generate-twitter-hashtags',
        form: [
            {
                label: 'Enter your topic',
                field: 'input',
                name: 'topic',
                required: true,
            }
        ]
    },
    
    {
        name: 'Essay Writer',
        desc: 'AI tool that generates essays based on the provided topic name.',
        category:'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/2621/2621040.png',
        aiPrompt: 'Generate a well-structured essay based on the provided topic.',
        slug: 'generate-essay',
        form: [
            {
                label: 'Enter your essay topic',
                field: 'input',
                name: 'topic',
                required: true,
            }
        ]
    },
    {
        name: 'Email Generator',
        desc: 'AI tool that generates professional emails based on the provided subject and details.',
        category:'Email',
        icon: 'https://cdn-icons-png.flaticon.com/128/732/732200.png',
        aiPrompt: 'Generate a professional email based on the provided subject and details. Provide the result in rich text editor format without any html tags ',
        slug: 'generate-email',
        form: [
            {
                label: 'Enter the email subject',
                field: 'input',
                name: 'subject',
                required: true,
            },
            {
                label: 'Enter email details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    {
        name: 'Resume Summary Generator',
        desc: 'AI tool that generates professional resume summaries based on user input.',
        category:'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135759.png',
        aiPrompt: 'Generate a concise and professional resume summary based on the user’s details.',
        slug: 'generate-resume-summary',
        form: [
            {
                label: 'Enter your job role and experience',
                field: 'textarea',
                name: 'resume_details',
                required: true,
            }
        ]
    },
    {
        name: 'Product Description Generator',
        desc: 'AI tool that creates compelling product descriptions based on product details.',
        category:'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/1170/1170678.png',
        aiPrompt: 'Generate a detailed product description based on the provided details.',
        slug: 'generate-product-description',
        form: [
            {
                label: 'Enter product details',
                field: 'textarea',
                name: 'details',
                required: true,
            }
        ]
    },
    {
        name: 'LinkedIn Post Generator',
        desc: 'AI tool that generates professional LinkedIn posts based on the provided topic and details.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174857.png',
        aiPrompt: 'Generate a compelling and professional LinkedIn post based on the provided topic and details. Ensure the post is engaging and well-structured.',
        slug: 'generate-linkedin-post',
        form: [
            {
                label: 'Enter post topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter additional details (optional)',
                field: 'textarea',
                name: 'details',
            }
        ]
    }
    
    
]