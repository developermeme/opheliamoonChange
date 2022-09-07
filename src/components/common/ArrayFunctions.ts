const getValue = (value: any) =>
  typeof value === "string" ? value.toUpperCase() : value;

/**
 * Filters an array of objects (one level-depth) with multiple criteria.
 *
 * @param  {Array}  array: the array to filter
 * @param  {Object} filters: an object with the filter criteria
 * @return {Array}
 */
export function filterItems<T, K extends keyof T>(
  array: Array<T>,
  filters: {
    [Property in keyof T]?: string;
  }
): Array<T> {
  const filterKeys = Object.keys(filters);
  return array.filter((item: T) => {
    return filterKeys.every((key) => {
      if (!filters[key as K]) return true;
      return getValue(filters[key as K]) === getValue(item[key as K]);
    });
  });
}

export function filterCollections<T, K extends keyof T>(
  array: Array<T>,
  filters: {
    [Property in keyof T]?: string[];
  }
): Array<T> {
  const filterKeys = Object.keys(filters);
  return array.filter((item: T) => {
    return filterKeys.every((key) => {
      if (!filters[key as K]?.length) return true;
      return filters[key as K]?.find(
        (filter: any) => getValue(filter) === getValue(item[key as K])
      );
    });
  });
}

export function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

export function genericSearch<T>(
  object: T,
  properties: Array<keyof T>,
  query: string
): boolean {
  if (query === "") {
    return true;
  }
  return properties.some((property) => {
    const value = object[property];
    if (typeof value === "string" || typeof value === "number") {
      return value.toString().toLowerCase().includes(query.toLowerCase());
    }
    return false;
  });
}

export const isEmpty = (value: any) => {
  return (
    // null or undefined
    value == null ||
    // has length and it's zero
    (value.hasOwnProperty("length") && value.length === 0) ||
    // is an Object and has no keys
    (value.constructor === Object && Object.keys(value).length === 0)
  );
};

export type Pick<T, U extends keyof T> = { [K in U]: T[K] };

export function pick<T, U extends keyof T>(obj: T, keys: U[]): Pick<T, U> {
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as T);
}
