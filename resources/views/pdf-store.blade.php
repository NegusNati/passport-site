<html>

<head>

</head>
<body>

<div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-col items-center justify-center w-full h-full">
        <div class="flex flex-col items-center justify-center w-full h-full">
            <h1 class="text-4xl font-bold text-center">PDF Store</h1>
            <div class="flex flex-col items-center justify-center w-full h-full">
                <form action="/pdf-to-sqlite" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="flex flex-col items-center justify-center w-full h-full">
                        <div class="flex flex-col items-center justify-center w-full h-full">

                            {{ csrf_field() }}
                            <div class="flex flex-col items-center justify-center w-full h-full">

                                <!-- Upload PDF -->
                                <div class="flex flex-col items-center justify-center w-full h-full">
                                    <label for="pdf_file" class="text-lg font-bold">Upload PDF</label>
                                    <input type="file" name="pdf_file" id="pdf_file" class="w-full h-full">
                                </div>
                                <div class="flex flex-col items-center justify-center w-full h-full">
                                    <label for="date" class="text-lg font-bold">Published Date</label>
                                    <input type="date" name="date" id="date" class="w-full h-full">

                                </div>


                                <div class="flex flex-col items-center justify-center w-full h-full">
                                    <button type="submit"
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Upload PDF
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</body>

</html>
