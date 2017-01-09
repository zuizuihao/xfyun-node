#include <nan.h>
#include "xfy_client.h"

void InitAll(v8::Local<v8::Object> exports) {
  XfyClient::Init(exports);
}

NODE_MODULE(xfyclient, InitAll);
