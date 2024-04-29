import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  VStack,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactMeSection = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: () => {},
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact Me
        </Heading>
        <Box rounded="md" p={6} w="100%">
          <form>
            <VStack spacing={4}>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of Enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                >
                  <option value="hireMe">Freelance Project Proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="comment">Your Message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                ></Textarea>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
