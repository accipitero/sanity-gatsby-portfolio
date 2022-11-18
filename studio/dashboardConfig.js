export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6377e3cd142bf22de941a6c0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-weeozq48',
                  apiId: '98831ae5-0cd3-4633-8842-e96d5d64d6d2'
                },
                {
                  buildHookId: '6377e3cee44885258c5a090a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mp2g82tj',
                  apiId: 'a93fbb60-e801-4a36-8d0d-95c3921557fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/accipitero/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mp2g82tj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
