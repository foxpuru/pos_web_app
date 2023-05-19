<Grid
// container
display={{ sm: "flex", xs: "grid" }}
// spacing={0}
border={{ sm: "2px solid #D7DBDC", xs: 0 }}
borderRadius={{ sm: "10px", xs: 0 }}
>
<FormikInput
  name="orderType"
  type="text"
  styles={{
    borderRadius: { sm: "10px 0px 0px 10px", xs: "10px" },
  }}
/>
<FormikInput
  name="order"
  type="text"
  styles={{
    borderLeft: { sm: "2px solid #D7DBDC", xs: undefined },
  }}
/>
<FormikInput
  name="orde"
  type="text"
  styles={{
    borderLeft: { sm: "2px solid #D7DBDC", xs: undefined },
    borderRadius: { sm: "0px 10px 10px 0px", xs: "10px" },
  }}
/>
</Grid>