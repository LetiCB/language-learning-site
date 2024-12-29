export function combineRefs<T>(...refs: (React.Ref<T> | undefined)[]): React.RefCallback<T> {
    return (node: T | null) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref && typeof ref === "object") {
          (ref as React.MutableRefObject<T | null>).current = node;
        }
      });
    };
  }
  
