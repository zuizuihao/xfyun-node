{
    "targets": [
        {
            "target_name": "xfyun",
            "sources": ["src/xfyun.cc"],
            "libraries": ["/opt/xfy-sdk/libs/x64/libmsc.so"],
            "include_dirs": [
                "./src/sdk/include",
                "<!(node -e \"require('nan')\")"
            ],
            "cflags": ["-g", "-Wall", "-Isrc/sdk/include"]
        }
    ]
}
