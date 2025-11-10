type Resource = {
  [lang: string]: {
    translation: {
      [key: string]:
        | string
        | {
            [key: string]: string | { [key: string]: string };
          };
    };
  };
};

function mergePluginsTranslations(a: Resource, b: Resource): Resource {
  const langsB = Object.keys(b);

  return {
    ...a,
    ...langsB.reduce((stack: Resource, lang) => {
      stack[lang] = {
        ...a?.[lang],
        translation: {
          ...a[lang]?.translation,
          ...b[lang]?.translation,
        },
      };

      return stack;
    }, {}),
  };
}

let pluginsResource: Resource = {};

export function withOptionalComponentPluginsTranslation(
  i18nResource: Resource
): Resource {
  return mergePluginsTranslations(i18nResource, pluginsResource);
}

export function registerPluginTranslation(pluginResourceToAdd: Resource) {
  pluginsResource = mergePluginsTranslations(
    pluginsResource,
    pluginResourceToAdd
  );
}
