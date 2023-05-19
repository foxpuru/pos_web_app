import { useField } from "formik"
import { Input } from "../styled-components/tableDetails"

export const FormikInput = ({ styles, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Input
      maxLength={4}
      // sm={4}
      // xs={12}
      // display="flex"
      // gap={{ sm: "50px", xs: "12px" }}

      sx={{
        border: { sm: 0, xs: "2px solid #D7DBDC" },
        // borderRight: { sm: "2px solid #D7DBDC", xs: 0 },
        borderRadius: { sm: 0, xs: "10px" },
        px: { sm: "42px", xs: "26px" },
        py: { sm: "22px", xs: "14px" },
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        fontSize: { sm: "32px", xs: "24px" },
        color: "#A5ACAE",
        letterSpacing: { sm: "32px", xs: "24px" },
        fontWeight: "300",
        ...styles,
        //   borderTopLeftRadius: { sm: "10px", xs: 0 },
        //   borderBottomLeftRadius: { sm: "10px", xs: 0 },
      }}
      {...field}
      {...props}
    />
  )
}
