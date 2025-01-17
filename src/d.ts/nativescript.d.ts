declare module '@nativescript/core/connectivity' {
  export var connectionType: any;
  export var startMonitoring: Function;
  export var getConnectionType: Function;
}

declare module '@nativescript/core/xhr' {
  export class XMLHttpRequest {
    open(method: string, url: string, async: boolean);
    send(payload: any): Function;
    setRequestHeader(key: string, value: string): void;
    onreadystatechange: Function;
    withCredentials: any;

    ontimeout: Function;
    onerror: Function;
    onprogress: Function;
    onload: Function;
    abort: Function;

    responseText: string;
    status: number;
    readyState: number;
  }
}
