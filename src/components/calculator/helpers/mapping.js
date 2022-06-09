export const getPath = (object, ...steps) =>
  object.map(object => {
    for (let i = 0; i < steps.length; ++i) {
      object = object[steps[i]];
    }
    return object;
  });
