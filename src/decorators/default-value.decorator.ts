export function DefaultValue(value: any) {
  return function (target: any, propertyKey: string) {
    let _value = value;

    Object.defineProperty(target, propertyKey, {
      get: () => _value,
      set: (newVal) => {
        _value = newVal !== undefined && newVal !== null ? newVal : value;
      },
      enumerable: true,
      configurable: true,
    });
  };
}
