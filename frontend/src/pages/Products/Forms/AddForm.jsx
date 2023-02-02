import { hasLength, useForm } from '@mantine/form';
import { TextInput, Group, Button, NumberInput, Card } from '@mantine/core';
import { addProduct } from '../../../api/products';
import '../style.css';
function AddForm() {
    const form = useForm({
        initialValues: {
            title: '',
            count: 0,
            price: 0
        },
        validate: {
            title: hasLength({ min: 2, max: 50 }, 'Title must be 2-50 characters long')
        }

    })
    const handleForm = async (values) => {
        await addProduct(values);
    }

    return (

        <form className='p-form-width' style={{ marginInline: "auto" }} onSubmit={form.onSubmit((values) => handleForm(values))} onReset={form.onReset}>
            <Card shadow="lg">
                <Group display="block">
                    <TextInput label="Title" placeholder='Name of the product' {...form.getInputProps('title')} />
                    <NumberInput label="Count"  {...form.getInputProps('count')} />
                    <NumberInput label="Price"  {...form.getInputProps('price')} />
                </Group>
                <Group display="inline">
                    <Button mt="md" mr="xs" variant='filled' type='submit' >Add</Button>
                    <Button mt="md" mx="xs" variant='outline' type='submit'>Add More</Button>
                    <Button mt="md" ml="xs" variant='default' type='reset'>Reset</Button>
                </Group>
            </Card>
        </form >
    )
}

export default AddForm;