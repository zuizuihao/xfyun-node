#include "xfy_client.h"

Nan::Persistent<v8::Function> XfyClient::constructor;

XfyClient::XfyClient(char value) : value_(value) {
}

XfyClient::~XfyClient() {
}

void XfyClient::Init(v8::Local<v8::Object> exports) {
  Nan::HandleScope scope;

  // Prepare constructor template
  v8::Local<v8::FunctionTemplate> tpl = Nan::New<v8::FunctionTemplate>(New);
  tpl->SetClassName(Nan::New("XfyClient").ToLocalChecked());
  tpl->InstanceTemplate()->SetInternalFieldCount(1);

  // Prototype
  Nan::SetPrototypeMethod(tpl, "value", GetValue);
  Nan::SetPrototypeMethod(tpl, "plusOne", PlusOne);
  Nan::SetPrototypeMethod(tpl, "multiply", Multiply);
  Nan::SetPrototypeMethod(tpl, "login", Login);

  constructor.Reset(tpl->GetFunction());
  exports->Set(Nan::New("XfyClient").ToLocalChecked(), tpl->GetFunction());
}

void XfyClient::New(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  if (info.IsConstructCall()) {
    // Invoked as constructor: `new XfyClient(...)`
    double value = info[0]->IsUndefined() ? 0 : info[0]->NumberValue();
    XfyClient* obj = new XfyClient(value);
    obj->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
  } else {
    // Invoked as plain function `XfyClient(...)`, turn into construct call.
    const int argc = 1;
    v8::Local<v8::Value> argv[argc] = { info[0] };
    v8::Local<v8::Function> cons = Nan::New<v8::Function>(constructor);
    info.GetReturnValue().Set(cons->NewInstance(argc, argv));
  }
}

void XfyClient::GetValue(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  XfyClient* obj = ObjectWrap::Unwrap<XfyClient>(info.Holder());
  info.GetReturnValue().Set(Nan::New(obj->value_));
}

void XfyClient::Login(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  XfyClient* obj = ObjectWrap::Unwrap<XfyClient>(info.Holder());
  info.GetReturnValue().Set(Nan::New(obj->value_));
}

void XfyClient::PlusOne(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  XfyClient* obj = ObjectWrap::Unwrap<XfyClient>(info.Holder());
  obj->value_ += 1;
  info.GetReturnValue().Set(Nan::New(obj->value_));
}

void XfyClient::Multiply(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  XfyClient* obj = ObjectWrap::Unwrap<XfyClient>(info.Holder());
  double multiple = info[0]->IsUndefined() ? 1 : info[0]->NumberValue();

  v8::Local<v8::Function> cons = Nan::New<v8::Function>(constructor);

  const int argc = 1;
  v8::Local<v8::Value> argv[argc] = { Nan::New(obj->value_ * multiple) };

  info.GetReturnValue().Set(cons->NewInstance(argc, argv));
}
