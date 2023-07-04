import { useField } from "formik"
import { Input } from "./styled-components"

export const FormikInput = ({ styles, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Input
      sx={{
        border: 0,
        borderRadius: "10px",
        px: { lg: "12px", xs: "8px" },
        // py: { sm: "22px", xs: "14px" },
        height: { lg: "40px", xs: "30px" },
        backgroundColor: "#EEF5F6",
        fontSize: { lg: "14px", xs: "12px" },
        color: "#A5ACAE",
        fontWeight: "400",
        ...styles,
      }}
      {...field}
      {...props}
    />
  )
}
