"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[8581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docSidebar":[{"type":"link","label":"Overview","href":"/docs/overview","docId":"overview","unlisted":false},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Install the FlowSynx CLI","href":"/docs/getting-started/install-flowsynx-cli","docId":"getting-started/install-flowsynx-cli","unlisted":false},{"type":"link","label":"Initialize FlowSynx","href":"/docs/getting-started/initialize-flowsynx","docId":"getting-started/initialize-flowsynx","unlisted":false},{"type":"link","label":"Run FlowSynx","href":"/docs/getting-started/run-flowsynx","docId":"getting-started/run-flowsynx","unlisted":false}],"href":"/docs/category/getting-started"},{"type":"category","label":"FlowSynx Api","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Use the FlowSynx API","href":"/docs/flowsynx-api/use-the-flowsynx-api","docId":"flowsynx-api/use-the-flowsynx-api","unlisted":false},{"type":"category","label":"Api End Points","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Config","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Config List","href":"/docs/flowsynx-api/api-endpoints/config/list","docId":"flowsynx-api/api-endpoints/config/list","unlisted":false},{"type":"link","label":"Add","href":"/docs/flowsynx-api/api-endpoints/config/add","docId":"flowsynx-api/api-endpoints/config/add","unlisted":false},{"type":"link","label":"Details","href":"/docs/flowsynx-api/api-endpoints/config/details","docId":"flowsynx-api/api-endpoints/config/details","unlisted":false},{"type":"link","label":"Delete","href":"/docs/flowsynx-api/api-endpoints/config/delete","docId":"flowsynx-api/api-endpoints/config/delete","unlisted":false}],"href":"/docs/category/config"},{"type":"link","label":"Health","href":"/docs/flowsynx-api/api-endpoints/health","docId":"flowsynx-api/api-endpoints/health","unlisted":false},{"type":"category","label":"Plugins","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"List","href":"/docs/flowsynx-api/api-endpoints/plugins/list","docId":"flowsynx-api/api-endpoints/plugins/list","unlisted":false},{"type":"link","label":"Details","href":"/docs/flowsynx-api/api-endpoints/plugins/details","docId":"flowsynx-api/api-endpoints/plugins/details","unlisted":false}],"href":"/docs/category/plugins"},{"type":"category","label":"Storage","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"About","href":"/docs/flowsynx-api/api-endpoints/storage/about","docId":"flowsynx-api/api-endpoints/storage/about","unlisted":false},{"type":"link","label":"Copy","href":"/docs/flowsynx-api/api-endpoints/storage/copy","docId":"flowsynx-api/api-endpoints/storage/copy","unlisted":false},{"type":"link","label":"Delete","href":"/docs/flowsynx-api/api-endpoints/storage/delete","docId":"flowsynx-api/api-endpoints/storage/delete","unlisted":false},{"type":"link","label":"DeleteFile","href":"/docs/flowsynx-api/api-endpoints/storage/deleteFile","docId":"flowsynx-api/api-endpoints/storage/deleteFile","unlisted":false},{"type":"link","label":"List","href":"/docs/flowsynx-api/api-endpoints/storage/list","docId":"flowsynx-api/api-endpoints/storage/list","unlisted":false},{"type":"link","label":"Mkdir","href":"/docs/flowsynx-api/api-endpoints/storage/mkdir","docId":"flowsynx-api/api-endpoints/storage/mkdir","unlisted":false},{"type":"link","label":"Move","href":"/docs/flowsynx-api/api-endpoints/storage/move","docId":"flowsynx-api/api-endpoints/storage/move","unlisted":false}],"href":"/docs/category/storage"},{"type":"link","label":"Version","href":"/docs/flowsynx-api/api-endpoints/version","docId":"flowsynx-api/api-endpoints/version","unlisted":false}],"href":"/docs/category/api-end-points"}],"href":"/docs/category/flowsynx-api"}]},"docs":{"flowsynx-api/api-endpoints/config/add":{"id":"flowsynx-api/api-endpoints/config/add","title":"Add","description":"Add configuration section to configuration.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/config/delete":{"id":"flowsynx-api/api-endpoints/config/delete","title":"Delete","description":"Delete configuration section.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/config/details":{"id":"flowsynx-api/api-endpoints/config/details","title":"Details","description":"Get details about configuration section.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/config/list":{"id":"flowsynx-api/api-endpoints/config/list","title":"Config List","description":"Manage configurations related to FlowSynx System. You can setup new remotes and manage existing ones.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/health":{"id":"flowsynx-api/api-endpoints/health","title":"Health","description":"Display the health status of FlowSynx System.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/plugins/details":{"id":"flowsynx-api/api-endpoints/plugins/details","title":"Details","description":"Get details about plugin item.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/plugins/list":{"id":"flowsynx-api/api-endpoints/plugins/list","title":"List","description":"Show the list of plugins supported by FlowSynx System.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/storage/about":{"id":"flowsynx-api/api-endpoints/storage/about","title":"About","description":"This api will return quota information about a storage to json data format. The output is typically used, free, and total contents.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/storage/copy":{"id":"flowsynx-api/api-endpoints/storage/copy","title":"Copy","description":"This api will copy entities from source storage to the destination.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/storage/delete":{"id":"flowsynx-api/api-endpoints/storage/delete","title":"Delete","description":"This api will Delete entities from specific storage path.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/storage/deleteFile":{"id":"flowsynx-api/api-endpoints/storage/deleteFile","title":"DeleteFile","description":"This api will delete entity from specific storage path.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/storage/list":{"id":"flowsynx-api/api-endpoints/storage/list","title":"List","description":"This api will list of entities regarding specific path.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/storage/mkdir":{"id":"flowsynx-api/api-endpoints/storage/mkdir","title":"Mkdir","description":"This api will make the directory on specific storage path.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/storage/move":{"id":"flowsynx-api/api-endpoints/storage/move","title":"Move","description":"This api will move entities from source storage to the destination.","sidebar":"docSidebar"},"flowsynx-api/api-endpoints/version":{"id":"flowsynx-api/api-endpoints/version","title":"Version","description":"Show the lowsynx version number, the build target OS and architecture, and the runtime OS.","sidebar":"docSidebar"},"flowsynx-api/use-the-flowsynx-api":{"id":"flowsynx-api/use-the-flowsynx-api","title":"Use the FlowSynx API","description":"In this guide, you\u2019ll simulate and access an application by running and calling the FlowSynx API directly.","sidebar":"docSidebar"},"getting-started/initialize-flowsynx":{"id":"getting-started/initialize-flowsynx","title":"Initialize FlowSynx","description":"Fetch the FlowSynx binaries and install them locally using flowsynx init.","sidebar":"docSidebar"},"getting-started/install-flowsynx-cli":{"id":"getting-started/install-flowsynx-cli","title":"Install the FlowSynx CLI","description":"Install the FlowSynx CLI as the main tool for running FlowSynx-related tasks","sidebar":"docSidebar"},"getting-started/run-flowsynx":{"id":"getting-started/run-flowsynx","title":"Run FlowSynx","description":"Running FlowSynx and checking its health.","sidebar":"docSidebar"},"overview":{"id":"overview","title":"Overview","description":"Introduction to the FlowSynx","sidebar":"docSidebar"}}}')}}]);