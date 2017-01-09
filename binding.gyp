{
    "targets": [
        {
            "target_name": "xfyun",
            "sources": ["src/xfyun.cc"],
            "libraries": ["-Wl,-rpath,./src/sdk/x64/libmsc.so"],
            "include_dirs": [
                "<!(node -e \"require('nan')\")",
                "./src/sdk/include"
            ],
            "cflags": ["-g", "-Wall", "-Isrc/sdk/include"]
        }
    ]
}
