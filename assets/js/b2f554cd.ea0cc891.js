"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[5894],{6042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"flowsynx-v0.3.0-is-now-available","metadata":{"permalink":"/blog/flowsynx-v0.3.0-is-now-available","source":"@site/blog/2024-07-05-flowsynx-v0.3.0-is-now-available.md","title":"FlowSynx v0.3.0 is now available","description":"We are super excited to announce the latest release of FlowSynx, v0.3.0! This post covers the highlights of the new features and enhancements in FlowSynx v0.3.0.","date":"2024-07-05T00:00:00.000Z","formattedDate":"July 5, 2024","tags":[{"label":"Release","permalink":"/blog/tags/release"}],"readingTime":0.745,"hasTruncateMarker":false,"authors":[{"name":"Maintainers","title":"FlowSynx project maintainers","imageURL":"/img/maintainer.png","key":"maintainers"}],"frontMatter":{"slug":"flowsynx-v0.3.0-is-now-available","title":"FlowSynx v0.3.0 is now available","authors":"maintainers","tags":["Release"]},"unlisted":false,"nextItem":{"title":"FlowSynx v0.2.0 is now available","permalink":"/blog/flowsynx-v0.2.0-is-now-available"}},"content":"We are super excited to announce the latest release of FlowSynx, v0.3.0! This post covers the highlights of the new features and enhancements in FlowSynx v0.3.0.\\n\\n## Release highlights\\nIf you\u2019re new to FlowSynx, familiarize yourself by visiting the [getting started](/docs/category/getting-started) page.\\n\\n### FlowSynx\\n- [ADDED] Add Google Cloud Storage plugin [#21](https://github.com/flowsynx/flowsynx/issues/21)\\n- [FIXED] Normalize in VersionHandler should return correct version value when the given version doesn\'t start with v [#20](https://github.com/flowsynx/flowsynx/issues/20)\\n- [FIXED] Change the StorageNormsParser Separator symbol [#22](https://github.com/flowsynx/flowsynx/issues/22)\\n- [FIXED] Change the AssemblyName from flowsynx to flowsynxe [#24](https://github.com/flowsynx/flowsynx/issues/24)\\n\\n### FlowSynx CLI\\n- [FIXED] Remove the self-destruction ability in uninstall functionality and let it to be done manually [#2](https://github.com/flowsynx/cli/issues/2)\\n- [FIXED] Change the AssemblyName from synx to flowsynx [#10](https://github.com/flowsynx/cli/issues/10)\\n- [FIXED] Rename all corresponding names regarding flowsynx engine to flowsynxe [#14](https://github.com/flowsynx/cli/issues/14)\\n- [FIXED] Delete full option from Cli Version command and display all version including engine and dashboard [#17](https://github.com/flowsynx/cli/issues/17)"},{"id":"flowsynx-v0.2.0-is-now-available","metadata":{"permalink":"/blog/flowsynx-v0.2.0-is-now-available","source":"@site/blog/2024-06-19-flowsynx-v0.2.0-is-now-available.md","title":"FlowSynx v0.2.0 is now available","description":"We are super excited to announce the latest release of FlowSynx, v0.2.0! This post covers the highlights of the new features and enhancements in FlowSynx v0.2.0.","date":"2024-06-19T00:00:00.000Z","formattedDate":"June 19, 2024","tags":[{"label":"Release","permalink":"/blog/tags/release"}],"readingTime":0.935,"hasTruncateMarker":false,"authors":[{"name":"Maintainers","title":"FlowSynx project maintainers","imageURL":"/img/maintainer.png","key":"maintainers"}],"frontMatter":{"slug":"flowsynx-v0.2.0-is-now-available","title":"FlowSynx v0.2.0 is now available","authors":"maintainers","tags":["Release"]},"unlisted":false,"prevItem":{"title":"FlowSynx v0.3.0 is now available","permalink":"/blog/flowsynx-v0.3.0-is-now-available"},"nextItem":{"title":"Introducing the FlowSynx blog","permalink":"/blog/introducing-the-flowsynx-blog"}},"content":"We are super excited to announce the latest release of FlowSynx, v0.2.0! This post covers the highlights of the new features and enhancements in FlowSynx v0.2.0.\\n\\n## Release highlights\\nIf you\u2019re new to FlowSynx, familiarize yourself by visiting the [getting started](/docs/category/getting-started) page.\\n\\n### FlowSynx\\n- [ADDED] Add Microsoft Azure Blob storage plugin [1](https://github.com/flowsynx/flowsynx/issues/1)\\n- [ADDED] Add OpenAPI specifications to the flowsynx [4](https://github.com/flowsynx/flowsynx/issues/4)\\n- [ADDED] Pushing FlowSynx to the Docker hub\\n- [FIXED] Refactoring **SpecificationsParser** class in order to check require member\'s value [7](https://github.com/flowsynx/flowsynx/issues/7)\\n- [FIXED] Change throw exception to logging message for DeleteAsync method in plugins [12](https://github.com/flowsynx/flowsynx/issues/12)\\n- [FIXED] Add ContentType to the ReadAsync API endpoint [13](https://github.com/flowsynx/flowsynx/issues/13)\\n- [FIXED] Make CopyFile, CopyDirectory, MoveFile, and  MoveDirectory methods in EntityCopier and EntityMover as asynchronous [14](https://github.com/flowsynx/flowsynx/issues/14), [15](https://github.com/flowsynx/flowsynx/issues/15)\\n- [FIXED] Fix issue regarding FlowSynx build and publish workflow action [16](https://github.com/flowsynx/flowsynx/issues/16)\\n- [FIXED] Fix warning messages in FlowSynx.Plugin.Storage.Azure.Blobs plugin [18](https://github.com/flowsynx/flowsynx/issues/18) \\n\\n### FlowSynx CLI\\n- [ADDED] Add OpenApi option to the run arguments for running FlowSynx [3](https://github.com/flowsynx/cli/issues/3)\\n\\n### FlowSynx Dashboard\\n- [ADDED] Pushing FlowSynx Dashboard to the Docker hub\\n\\n### FlowSynx C# SDK\\n- [ADDED] Adding License to the SDK NuGet package [1](https://github.com/flowsynx/csharp-sdk/issues/1)"},{"id":"introducing-the-flowsynx-blog","metadata":{"permalink":"/blog/introducing-the-flowsynx-blog","source":"@site/blog/2024-05-11-introducing-the-flowsynx-blog.md","title":"Introducing the FlowSynx blog","description":"Welcome to the FlowSynx blog! We\u2019ve created this blog to share FlowSynx news and a variety of content from and for the FlowSynx community. This content may include deep dives into specific technical topics, examples of how FlowSynx can be used in various scenarios and any other interesting content from the community.","date":"2024-05-11T00:00:00.000Z","formattedDate":"May 11, 2024","tags":[{"label":"Introduction","permalink":"/blog/tags/introduction"}],"readingTime":0.26,"hasTruncateMarker":false,"authors":[{"name":"Maintainers","title":"FlowSynx project maintainers","imageURL":"/img/maintainer.png","key":"maintainers"}],"frontMatter":{"slug":"introducing-the-flowsynx-blog","title":"Introducing the FlowSynx blog","authors":"maintainers","tags":["Introduction"]},"unlisted":false,"prevItem":{"title":"FlowSynx v0.2.0 is now available","permalink":"/blog/flowsynx-v0.2.0-is-now-available"}},"content":"Welcome to the FlowSynx blog! We\u2019ve created this blog to share FlowSynx news and a variety of content from and for the FlowSynx community. This content may include deep dives into specific technical topics, examples of how FlowSynx can be used in various scenarios and any other interesting content from the community."}]}')}}]);