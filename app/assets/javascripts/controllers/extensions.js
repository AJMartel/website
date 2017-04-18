class ExtensionsCtrl {
  constructor($scope) {

    $scope.freeExtensions = [
      {
        name: "File Attachments",
        desc: "An extension that allows you to attach files to your notes.",
        sref: "extensions.file_attacher",
        types: ["Extension"]
      },
      {
        name: "Simple Markdown Editor",
        desc: "A simple Markdown editor with split pane preview.",
        sref: "extensions.simple_markdown",
        types: ["Editor"]
      },
      {
        name: "Standard Journal",
        desc: "A blogging extension for Standard Notes. Easily create your own personal blog from your notes.",
        href: "https://github.com/standardnotes/standard-journal",
        types: ["Extension"]
      },
      {
        name: "Realtime Collaborative Editor",
        desc: "A proof of concept collaborative text editor with end-to-end encryption.",
        sref: "extensions.collab",
        types: ["Experimental", "Editor"]
      }
    ]

    $scope.proExtensions = [
      {
        name: "Dropbox Sync",
        desc: "Automatically syncs your tags and notes to your Dropbox for added redundancy.",
        types: ["Sync Adapter"],
        sref: "extended",
        cta: "Get"
      },
      {
        name: "Google Drive Sync",
        desc: "Automatically syncs your tags and notes to your Google Drive for added redundancy.",
        types: ["Sync Adapter"],
        sref: "extended",
        cta: "Get"
      },
      {
        name: "Note History",
        desc: "Tracks changes to your notes and allows you to restore to earlier versions.",
        sref: "extensions.history",
        types: ["Extension"],
        cta: "Info"
      },
      {
        name: "Advanced Markdown Editor",
        desc: "An advanced Markdown editor with live preview, editor toolbar, and split pane support.",
        sref: "extensions.advanced_markdown",
        types: ["Editor"],
        cta: "Demo"
      },
      {
        name: "Code Editor",
        desc: "Ideal for code snippets and other useful functions that you want to hold on to in your notes.",
        sref: "extensions.code_editor",
        types: ["Editor"],
        cta: "Demo"
      },
      {
        name: "Minimal Markdown Editor",
        desc: "A minimal Markdown editor with inline style support.",
        sref: "extensions.min_markdown",
        types: ["Editor"],
        cta: "Demo"
      },
      {
        name: "Midnight",
        desc: "A night theme for Standard Notes Desktop and Web.",
        sref: "extensions.themes",
        types: ["Theme"],
        cta: "Info"
      }
    ]

  }
}

angular.module('app.main').controller('ExtensionsCtrl', ExtensionsCtrl);
