{
  "targets": [
    {
      "target_name": "xfyclient",
      "sources": [ "src/xfy_client.cc", "src/xfy_wrap.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
