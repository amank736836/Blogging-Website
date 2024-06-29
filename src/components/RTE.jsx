import React, { useContext, useMemo } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "../conf/conf";
import { ThemeContext } from "../hooks/useTheme.js";

function RTE({ name, control, label, defaultValue = "", className }) {
  const { themeMode } = useContext(ThemeContext);

  // Memoize the configuration object to avoid re-creating it unnecessarily
  const editorConfig = useMemo(() => {
    const plugins = [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "help",
      "wordcount",
    ];

    const toolbar =
      "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help";

    const contentStyle = `
      body {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 14px;
      }
    `;

    return {
      height: 400,
      menubar: true,
      skin: themeMode === "dark" ? "oxide-dark" : "oxide",
      content_css: themeMode === "dark" ? "dark" : "default",
      plugins: plugins,
      toolbar: toolbar,
      content_style: contentStyle,
    };
  }, [themeMode]); // Dependency array ensures this useMemo hook runs when themeMode changes

  return (
    <div className={`w-full ${className}`}>
      {label && <label className="inline-block pl-1 mb-1">{label}</label>}

      <Controller
        key={themeMode} // Use themeMode as a key to force re-render when it changes
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={conf.tinyMCEApiKey}
            initialValue={defaultValue}
            init={editorConfig}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
