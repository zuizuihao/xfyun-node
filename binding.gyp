{
    "targets": [
        {
            "target_name": "xfyclient",
            "sources": ["src/xfy_client.cc", "src/xfy_wrap.cc"],
            "libraries": ["-Wl,-rpath, src/sdk/x64/libmsc.so"],
            "include_dirs": [
                "<!(node -e \"require('nan')\")",
                "./src/sdk/include"
            ],
            "cflags": ["-g", "-Wall", "-Isrc/sdk/include"]
        }
    ]
}
