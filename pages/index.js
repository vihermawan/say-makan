import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Select,
  Textarea,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { Formik, Form, Field } from 'formik'
import * as validation from '@/lib/validator/validator'

export default function Home() {
  const bgColor = useColorModeValue('white', 'gray.700')
  const [loading, setLoading] = useState(false)

  const submitData = (values) => {
    setLoading(true)
    const params = new FormData()
    params.set('email', values.email)
  }

  return (
    <>
      <NextSeo
        title="Masukkan Kritik dan Saran"
        description="Website ini merupakan wadah untuk menyampaikan kritikan terhadap makanan yang telah disediakan"
        openGraph={{
          url: 'https://eksportin.co.id',
          title: 'Masukkan Kritik dan Saran',
          description:
            'Website ini merupakan wadah untuk menyampaikan kritikan terhadap makanan yang telah disediakan',
          images: [
            {

            },
          ],
          site_name: 'Saymakan.co.id',
        }}
      />
      <Flex
        direction="column"
        alignSelf="center"
        justifySelf="center"
        overflow="hidden"
      >
        <Box
          position="absolute"
          minH={{ base: '70vh', md: '50vh' }}
          w={{ md: 'calc(100vw - 50px)' }}
          borderRadius={{ md: '15px' }}
          left="0"
          right="0"
          bgRepeat="no-repeat"
          overflow="hidden"
          zIndex="-1"
          top="0"
          bgImage="/assets/img/food.jpg"
          bgSize="cover"
          mx={{ md: 'auto' }}
          mt={{ md: '14px' }}
        ></Box>
        <Flex
          direction="column"
          textAlign="center"
          justifyContent="center"
          align="center"
          mt="6.5rem"
          mb="30px"
        >
          <Text fontSize="4xl" color="white" fontWeight="bold">
            Masukkan Kritik dan Saran anda
          </Text>
          <Text
            fontSize="md"
            color="white"
            fontWeight="normal"
            mt="10px"
            mb="26px"
            w={{ base: '100%', sm: '90%', lg: '40%', xl: '30%' }}
          >
            Kritik dan saran anda terhadap makanan kami akan sangat membantu untuk berkembangnya kami ke depannya dalam menyajikan pelayanan terbaik.
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
          <Flex
            direction="column"
            w="full"
            background="transparent"
            borderRadius="15px"
            py="40px"
            px="20px"
            mx={{ base: '20px' }}
            bg={bgColor}
            boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
          >
            <Formik
              initialValues={{ critics: '', suggest : '' }}
              onSubmit={(values) => {
                submitData(values)
              }}
            >
              {() => (
                <Form>
                  <FormControl>
                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                      Pilih jenis catering
                    </FormLabel>
                    <Select placeholder='Pilih jenis catering'>
                      <option value='Daily Fit Meals'>Daily Fit Meals</option>
                      <option value='Clean Calories'>Clean Calories</option>
                    </Select>
                    <FormLabel fontSize="sm" fontWeight="normal" mt="4">
                      Kritik
                    </FormLabel>
                    <Field name="critics" validate={validation.Required}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.critics && form.touched.critics}
                        >
                          <Textarea
                            fontSize="sm"
                            ms="4px"
                            borderRadius="5px"
                            placeholder="silahkan masukkan kritin anda"
                            mb={!form.errors.critics ? '24px' : '0px'}
                            size="lg"
                            id="critics"
                            {...field}
                          />
                          <FormErrorMessage mb="24px">
                            {form.errors.critics}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                      Saran
                    </FormLabel>
                    <Field name="suggest" validate={validation.Required}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.suggest && form.touched.suggest}
                        >
                          <Textarea
                            fontSize="sm"
                            ms="4px"
                            borderRadius="5px"
                            placeholder="silahkan masukkan kritin anda"
                            mb={!form.errors.suggest ? '24px' : '0px'}
                            size="lg"
                            id="suggest"
                            {...field}
                          />
                          <FormErrorMessage mb="24px">
                            {form.errors.suggest}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      type="submit"
                      bg="teal.300"
                      fontSize="16px"
                      color="white"
                      fontWeight="bold"
                      w="100%"
                      h="45"
                      mb="24px"
                      _hover={{
                        bg: 'teal.200',
                      }}
                      _active={{
                        bg: 'teal.400',
                      }}
                      mt="4"
                      isLoading={loading}
                    >
                      Kirim
                    </Button>
                  </FormControl>
                </Form>
              )}
            </Formik>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
