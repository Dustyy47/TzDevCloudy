import { Avatar, Box } from "@material-ui/core";
import { InputHTMLAttributes, forwardRef, useState } from "react";

interface AvatarPickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "ref"> {
  setFile: (file: File) => void;
}

export const AvatarPicker = forwardRef<HTMLInputElement, AvatarPickerProps>(
  ({ setFile, ...props }, ref) => {
    const [preview, setPreview] = useState("");

    function handlePickAvatar(e: React.ChangeEvent<HTMLInputElement>) {
      if (!e.target.files) return;
      const img = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
    }

    return (
      <Box>
        <label className="flex flex-col gap-2">
          <Avatar src={preview} alt="avatar" />
          <input
            {...props}
            ref={ref}
            onChange={handlePickAvatar}
            accept="image/*"
            type="file"
          />
        </label>
      </Box>
    );
  }
);
