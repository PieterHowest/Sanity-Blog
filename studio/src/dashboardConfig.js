export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea5d42ca4028d99ad38c27e',
                  title: 'Sanity Studio',
                  name: 'Sanity-Blog-studio-kbhyw6ga',
                  apiId: '18471266-b994-462f-a205-d6b83f7afcf0'
                },
                {
                  buildHookId: '5ea5d42ca4028d32a738c8c2',
                  title: 'Blog Website',
                  name: 'Sanity-Blog-web-a3t6y1kj',
                  apiId: '4e87286c-6378-413a-a0c4-5bc0ff3036f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PieterHowest/Sanity-Blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://Sanity-Blog-web-a3t6y1kj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
