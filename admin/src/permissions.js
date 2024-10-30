export { pluginPermissions };

const pluginPermissions = {
  exportButton: [{ action: 'plugin::import-export-entries-js.export', subject: null }],
  importButton: [{ action: 'plugin::import-export-entries-js.import', subject: null }],
  main: [
    { action: 'plugin::import-export-entries-js.export', subject: null },
    { action: 'plugin::import-export-entries-js.import', subject: null },
  ],
};
